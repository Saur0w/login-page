"use client";

import styles from './style.module.scss';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Link from "next/link";

export default function LoginPage() {
    const formRef = useRef(null);

    useGSAP(() => {
        gsap.from(formRef.current, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        });
    }, { scope: formRef });

    return (
        <section className={styles.loginPage}>
            <form className={styles.form} ref={formRef}>
                <h1>Login</h1>
                <section className={styles.inputs}>
                    <div className={styles.email}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email" />
                    </div>
                    <div className={styles.password}>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="Enter your password" />
                    </div>

                    <button type="submit" className={styles.submitButton}>Login In</button>
                    <Link href="/signup" className={styles.signupInstead}>Sign up instead?</Link>
                </section>
            </form>
        </section>
    );
}
