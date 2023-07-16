//myCourts.js
import { getServerSession } from "next-auth"
import Head from "next/head";
import { useSession } from "next-auth/react";
import { authOptions } from "./api/auth/[...nextauth]"
import Layout from "../src/components/layout"
import { prisma }  from "../src/prisma";
import { useMemo, Fragment, useState } from "react";
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import { MapIcon } from "@heroicons/react/24/outline";
import { Menu, Transition } from '@headlessui/react'
import DeleteModal from "../src/components/deleteModal";
import CourtsPanel from "../src/components/courtsPanel";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function myCourts({ courtData }) {
    const [deleteOpen, setDeleteOpen] = useState(false)
    const [panelOpen, setPanelOpen] = useState(false)
    const [currCourt, setCurrCourt] = useState(null)

    const { data: session, status } = useSession()

    const handleDelete = (court) => {
      setCurrCourt(court)
      setDeleteOpen(true)
    }

    const handleEdit = (court) => {
      setCurrCourt(court)
      setPanelOpen(true)
    }

    return (
      <>
        <Head>
          <title>My Courts</title>
          <meta name="description" content="Suggest your own court" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/ball_up.svg" />
        </Head>
        <Layout main={
            <div className="pt-20 lg:pt-6 px-6 bg-slate-100 h-full">
                <h1 className="text-2xl">My Courts</h1>
                <ul role="list" className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 auto-rows-max">

                {courtData.map((courts) => (
                  <li key={`${courts.id}-${courts.address}`} className="col-span-1 rounded-lg bg-white shadow">
                  <div className="p-4 flex flex-col gap-4 h-full">
                    <div className="flex justify-between">
                      <h1>{courts.address}</h1>
                      <Menu as="div" className="relative inline-block text-left">
                        <div>
                          <Menu.Button className="flex items-center rounded-full bg-gray-100 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                            <span className="sr-only">Open options</span>
                            <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
                          </Menu.Button>
                        </div>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                              <Menu.Item>
                                {({ active }) => (
                                  <button
                                  className={classNames(
                                    active ? 'bg-indigo-600 text-white' : 'text-gray-700',
                                    'block w-full px-4 py-2 text-left text-sm flex'
                                  )}
                                  onClick={() => window.location.replace(`/${courts.longitude},${courts.latitude},18`)}
                                >
                                  <p className="my-auto">Show on map</p>
                                  <MapIcon className="h-6 w-6 pl-2"/>
                                </button>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <button
                                  className={classNames(
                                    active ? 'bg-indigo-100 text-gray-900' : 'text-gray-700',
                                    'block w-full px-4 py-2 text-left text-sm'
                                  )}
                                  onClick={() => handleEdit(courts)}
                                >
                                  Edit
                                </button>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <button
                                    className={classNames(
                                      active ? 'bg-red-500 text-white' : 'text-red-500',
                                      'block w-full px-4 py-2 text-left text-sm'
                                    )}
                                    onClick={() => handleDelete(courts)}
                                  >
                                    Delete
                                  </button>
                                )}
                              </Menu.Item>
                            </div>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                    <p className="text-sm">{courts.description}</p>

                    
                  </div>
                  
                  </li>
                ))}
                </ul>
                {currCourt && 
                  <div>
                    <DeleteModal key={currCourt.id} open={deleteOpen} setOpen={setDeleteOpen} marker={currCourt}/>
                    <CourtsPanel key={currCourt.id} open={panelOpen} setOpen={setPanelOpen} marker={currCourt} session={session} edit={true}/>
                  </div>
                }
                
            </div>
        }/>
      </>
    )
}


export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    };
  }

  const data = await prisma.courts.findMany({
    where: {
      userId: session.user.id,
    },
  });

  return {
    props: {
      session,
      courtData: JSON.parse(JSON.stringify(data)),
    },
  };
}
