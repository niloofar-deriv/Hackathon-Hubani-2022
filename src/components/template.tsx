import { FC, ReactNode } from 'react';
import styles from './template.module.scss';

type TemplateProps = {
    children: ReactNode
    brand_name: string
    website: string
    generate_qr_code: ReactNode
}

const Template: FC<TemplateProps> = ({ children, brand_name, website, generate_qr_code }) => {
    return (
        <div className={styles.container}>
            <div className={`${styles.card_back} margin`}>
                <div className={styles.line} />
                <div className={styles.brand_container}>
                    <span className={styles.brand}>{brand_name}</span>
                    <span className={styles.website}>{website}</span>
                </div>
                <div className={styles.line} />
            </div>

            <div className={`${styles.card_front} margin`}>
                <div className={styles.brand_section}>
                    <div className={styles.line} />
                    <div className={styles.brand_container}>
                        <span className={styles.brand}>{brand_name}</span>
                        <span className={styles.website}>{website}</span>
                        {generate_qr_code}
                    </div>
                    <div className={styles.line} />
                </div>

                <div className={styles.form_container}>
                    {children}
                </div>

                <div className='mobile'>
                    {generate_qr_code}
                </div>
            </div>
        </div>
    )
}

export default Template;