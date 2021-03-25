import styles from './styles.module.scss';

export function SubscribeButton() {
    return (
        <button
            type="button"
            className={styles.button}
        >
            Subscribe Now
        </button>
    );
}