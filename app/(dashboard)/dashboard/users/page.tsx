import Link from "next/link";

const page = () => {
  return (
    <div>
      <h1>Dashboard</h1>

        <ul className="mt-12">
            <li>
                <Link href="/dashboard/users/1" className="text-blue-500 hover:underline">
                    User1
                </Link>
                </li>
            <li>
                <Link href="/dashboard/users/2" className="text-blue-500 hover:underline">  
                    User2
                </Link>
                </li>
            <li>
                <Link href="/dashboard/users/3" className="text-blue-500 hover:underline">
                    User3
                </Link>
                </li>

        </ul>

    </div>
  );
}

export default page;