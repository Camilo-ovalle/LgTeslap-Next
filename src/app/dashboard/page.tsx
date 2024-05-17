'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';

import { SideBar } from '@/components/SideBar';
import { useAppContext } from '@/context/appContext';
import { GoAlertFill } from 'react-icons/go';
import { set } from 'zod';

function Dashboard() {
  const { data } = useAppContext();
  const { testEmail, services } = data;

  return (
    <div className="flex bg-gray-50">
      <SideBar />
      <div className="w-full border-l border-gray-300">
        <section className="w-full h-auto " id="Profile">
          <div className="w-full p-10">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-4">
                <p className="text-2xl text-gray-800 font-bold">{testEmail}</p>
                <p className="text-gray-600">
                  Software Engineer at Example Corp
                </p>
                <p className="text-gray-600">jane.doe@example.com</p>
              </div>
              <div className="p-4 border-t border-gray-300 text-gray-600">
                <div className="flex justify-between">
                  <div>
                    <p className="font-bold text-lg">Skills</p>
                    <ul>
                      <li>React</li>
                      <li>JavaScript</li>
                      <li>Node.js</li>
                      <li>Python</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-bold text-lg">Interests</p>
                    <ul>
                      <li>Coding</li>
                      <li>Photography</li>
                      <li>Gaming</li>
                      <li>Cooking</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="px-4 pt-3 pb-4 border-t border-gray-300 bg-gray-100">
                <div className="text-xs uppercase font-bold text-gray-600 tracking-wide">
                  User Bio
                </div>
                <div className="flex justify-between">
                  <div className="mt-1">
                    <p className="text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full h-auto" id="Functions">
          <div className="p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <span className="text-2xl leading-none align-baseline">
                      {services.length}
                    </span>
                    <h3 className="text-lg font-medium text-gray-700">
                      Number of Services
                    </h3>
                  </div>
                </div>
              </div>
              <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <span className="text-2xl leading-none align-baseline">
                      120
                    </span>
                    <h3 className="text-lg font-medium text-gray-700">Sales</h3>
                  </div>
                </div>
              </div>
              <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <span className="text-2xl leading-none align-baseline">
                      87%
                    </span>
                    <h3 className="text-lg font-medium text-gray-700">
                      Conversion Rate
                    </h3>
                  </div>
                </div>
              </div>
              <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <span className="text-2xl leading-none align-baseline">
                      400
                    </span>
                    <h3 className="text-lg font-medium text-gray-700">
                      Feedbacks
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col">
              <div className="align-middle min-w-full shadow overflow-hidden sm:rounded-lg">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Oder ID
                      </th>
                      <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Description
                      </th>
                      <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Delete Order
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {services.map(
                      (user: { id?: string; description?: string }) => {
                        return (
                          <tr key={(user as { id: string }).id}>
                            <td className="pl-12 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                              {(user as { id: string }).id}
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                              {(user as { description: string }).description}
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-green-500">
                              {(user as { Status: string }).Status}
                            </td>
                            <td className="pl-16 whitespace-no-wrap text-sm leading-7 text-red-500">
                              <button onClick={() => alert('Click')}>
                                <GoAlertFill />
                              </button>
                            </td>
                          </tr>
                        );
                      },
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;
