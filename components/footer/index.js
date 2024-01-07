import styles from './footer.module.css'

export default function Footer() {
    return(
        <>
            <div className={styles.footer}>
                <div className={styles.optionButtons}>
                    <button>Meta</button>
                    <button>About</button>
                    <button>Blog</button>
                    <button>Jobs</button>
                    <button>Help</button>
                    <button>API</button>
                    <button>Privacy</button>
                    <button>Terms</button>
                    <button>Locations</button>
                    <button>Instagram Lite</button>
                    <button>Threads</button>
                    <button>Contact Uploading & Non-Users</button>
                    <button>Meta Verified</button>
                </div>
                <div className={styles.copyright}>
                    <button>English v</button>
                    <button>© 2024 Instagram from Meta</button>
                </div>
            </div>
        </>
    )
}