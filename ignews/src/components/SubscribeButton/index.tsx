import styles from './styles.module.scss';
import { useSession, signIn } from 'next-auth/client';
import { api } from '../../services/api';
import { getStripeJs } from '../../services/stripe-js';
import { useRouter } from 'next/router';

interface SubscribeButtonProps {
    priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {

    const [session] = useSession();
    const router = useRouter();

    async function handleSubscribe() {
        if (!session) {
            signIn('github')
            return;
        }

        // @ts-ignore
        if (session.activeSubscription) {
            return router.push('/posts');
        }

        try {
            const reponse = await api.post('/subscribe');
            const { sessionId } = reponse.data;
            const stripe = await getStripeJs();
            await stripe.redirectToCheckout({ sessionId });
        } catch (err) {
            console.log(err);
        }


    }

    return (
        <button
            type="button"
            className={styles.button}
            onClick={handleSubscribe}
        >
            Subscribe Now
        </button>
    );
}