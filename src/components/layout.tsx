import { FC, ReactNode } from "react";

type LayoutProps = {
    children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return(
        <div className="container">
            <h1>Welcome to <span className='hubani'>Hubani</span> VCard Generator</h1>
            {children}
            <p className="copyright">Copyright Hubani 2022 :)</p>
        </div>
    )
}

export default Layout;