import {FC, PropsWithChildren} from "react";
import {Header} from "@/components/layout/header/Header";
import Meta from "@/components/seo/Meta";
import {IMeta} from "@/components/seo/meta.interface";
import dynamic from "next/dynamic";

const DynamicFooter = dynamic(() => import('./footer/Footer'), {
    ssr: false
})


export const Layout: FC<PropsWithChildren<IMeta>> = ({children, title, description}) => {
    return (
        <Meta title={title} description={description}>
            <Header/>
            <main>{children}</main>
            <DynamicFooter/>
        </Meta>
    );
};
