import styles from './footer.module.css'
import Button from '@/components/Button'

export default function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.optionButtons}>
                    <Button title="Meta"/>
                    <Button title="About"/>
                    <Button title="Blog"/>
                    <Button title="Jobs"/>
                    <Button title="Help"/>
                    <Button title="API"/>
                    <Button title="Privacy"/>
                    <Button title="Terms"/>
                    <Button title="Locations"/>
                    <Button title="Instagram Lite"/>
                    <Button title="Threads"/>
                    <Button title="Contact Uploading & Non-Users"/>
                    <Button title="Meta Verified"/>
                </div>
                <div className={styles.copyright}>
                    <select aria-label="Switch Display Language" className={styles.select}><option value="af">English</option><option value="ar">العربية</option><option value="cs">Čeština</option><option value="da">Dansk</option><option value="de">Deutsch</option><option value="el">Ελληνικά</option><option value="en">English</option><option value="en-gb">English (UK)</option><option value="es">Español (España)</option><option value="es-la">Español</option><option value="fa">فارسی</option><option value="fi">Suomi</option><option value="fr">Français</option><option value="he">עברית</option><option value="id">Bahasa Indonesia</option><option value="it">Italiano</option><option value="ja">日本語</option><option value="ko">한국어</option><option value="ms">Bahasa Melayu</option><option value="nb">Norsk</option><option value="nl">Nederlands</option><option value="pl">Polski</option><option value="pt-br">Português (Brasil)</option><option value="pt">Português (Portugal)</option><option value="ru">Русский</option><option value="sv">Svenska</option><option value="th">ภาษาไทย</option><option value="tl">Filipino</option><option value="tr">Türkçe</option><option value="zh-cn">中文(简体)</option><option value="zh-tw">中文(台灣)</option><option value="bn">বাংলা</option><option value="gu">ગુજરાતી</option><option value="hi">हिन्दी</option><option value="hr">Hrvatski</option><option value="hu">Magyar</option><option value="kn">ಕನ್ನಡ</option><option value="ml">മലയാളം</option><option value="mr">मराठी</option><option value="ne">नेपाली</option><option value="pa">ਪੰਜਾਬੀ</option><option value="si">සිංහල</option><option value="sk">Slovenčina</option><option value="ta">தமிழ்</option><option value="te">తెలుగు</option><option value="ur">اردو</option><option value="vi">Tiếng Việt</option><option value="zh-hk">中文(香港)</option><option value="bg">Български</option><option value="fr-ca">Français (Canada)</option><option value="ro">Română</option><option value="sr">Српски</option><option value="uk">Українська</option></select>
                    © 2024 Instagram from Meta
                </div>
            </footer>
        </>
    )
}