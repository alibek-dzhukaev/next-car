import {Layout} from "@/components/layout/Layout";
import {NextPageAuth} from "@/interfaces/page.interface";

const AboutPage: NextPageAuth = () => {
    return (
        <Layout title='About'>
            About
        </Layout>
    );
};

AboutPage.isOnlyUser = true

export default AboutPage