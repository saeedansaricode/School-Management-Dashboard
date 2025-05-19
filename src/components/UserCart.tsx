import Image from "next/image";
import CurrentDate from "./CurrentDate";
import Link from "next/link";
import { prisma } from "@/lib/prisma";


async function UserCart() {
  
  // FETCH DATA
  const models: Record<typeof type, any> = {
    teacher: prisma.teacher,
    student: prisma.student,
    parent: prisma.parent,
    event: prisma.event,
  };
  const data = await models[type].count();
  console.log(data);

  return (
    <div className="flex-1 min-w-[130px] p-3 rounded-2xl odd:bg-schoolPurple even:bg-schoolYellow">
      <div className="flex items-center justify-between">
        <span className="bg-white py-1 px-2 text-[10px] rounded-full text-green-600">
          <CurrentDate />
        </span>
        <div>
          <Link href={href}>
            <Image
              className=""
              src="/more.png"
              alt="more"
              width={20}
              height={20}
            />
          </Link>
        </div>
      </div>
      <h1 className="text-2xl font-semibold my-4">{apiRes ?? 0}</h1>
      <h2 className="capitalize text-sm font-medium text-gray-500">{type}</h2>
    </div>
  );
}

export default UserCart;
