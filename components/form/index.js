import styles from './form.module.css'
import Image from 'next/image'
import Button from '@/components/Button'

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
                <Button title="Log in"/>
                <div className={styles.orDivide}>
                    <div></div>
                    <p>OR</p>
                    <div></div>
                </div>
                <div className={styles.facebook}>
                    <Image src={'/images/fbfavicon.png'} alt="facebook icon" width={25} height={17}/>
                    <Button title="Log in with Facebook"/>
                </div>
                <div className={styles.forgotPass}><Button title="Forgot password?"/></div>
            </div>
        </>
    )
}