import styles from './template.module.scss';

const Template = () => {
    return(
        <div className={styles.container}>
            <div
            style={{
                backgroundColor: '#262d37'
            }}
            className={styles.card}>
                <div style={{backgroundColor: '#1e252c', width: '100%', height: '40px'}} />
                <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    <span style={{ fontSize: '28px', fontWeight: 'bold', color: '#d8d8d8' }}>Brand Name</span>
                    <span style={{ color: '#1c82ad', fontSize: '18px', marginTop: '10px' }}>www.mybrand.com</span>
                </div>
                <div style={{backgroundColor: '#1e252c', width: '100%', height: '40px'}} />
            </div>

            <div 
            className={styles.newCard}
            >
                <div
                style={{
                    width: '35%',
                    backgroundColor: '#262d37',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderRight: '5px solid #1c82ad'
                }}
                >
                    <div style={{backgroundColor: '#1e252c', width: '100%', height: '40px'}} />
                <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#d8d8d8' }}>Brand Name</span>
                    <span style={{ color: '#1c82ad', fontSize: '16px', marginTop: '10px' }}>www.mybrand.com</span>
                </div>
                <div style={{backgroundColor: '#1e252c', width: '100%', height: '40px'}} />
                </div>

                <div>
                    2
                </div>
            </div>
        </div>
    )
}

export default Template;

/// welcome to Hubani
// we are creating a visit card with you
// for printing this card pls select what u want