import styles from './form.module.css'
import Image from 'next/image'

export default function Form() {
    return(
        <>
            <div className={styles.formContainer}>
                <form className={styles.form}>
                        <input
                            id="user"
                            classname={styles.userInput}
                            type="text"
                            placeholder="Phone number, username, or email"
                        />

                        <input
                            id="password"
                            classname={styles.passwordInput}
                            type="password"
                            placeholder="Password"
                        />
                </form>
                <button className={styles.loginButton}>Log in</button>
                <div className={styles.orDivide}>
                    <div className={styles.divideLine}></div>
                    <p>OR</p>
                    <div className={styles.divideLine}></div>
                </div>
                <div className={styles.facebook}>
                    <Image src={'/images/fbfavicon.png'} alt="facebook icon" width={25} height={17}/>
                    <button>Log in with Facebook</button>
                </div>
                <button className={styles.forgot}>Forgot password?</button>
            </div>
        </>
    )
}