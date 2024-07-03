import { currentUser } from '@clerk/nextjs/server';
import { auth } from '@clerk/nextjs/server';

export default async function DashboardPage() {
    // Fetch user information (optional based on your use case)
    const { userId }: { userId: string | null } = auth();
    const user = await currentUser();

    // Optional: Check if user is authenticated and redirect or show a message
    

    // Return null or empty fragment to do nothing on this page
    return <></>;
}
