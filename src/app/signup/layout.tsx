import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Sign Up",
    description: "Sign Up",
};

export default function SignUpLayout({
                                        children,
                                    }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}
        </>
    );
}