import { UserButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import Link from 'next/link';

export default async function Header() {
    // Fetch user authentication information (optional based on your use case)
    const { userId } = auth();

    // Return null or empty fragment to do nothing on this header
    return <></>;
}
