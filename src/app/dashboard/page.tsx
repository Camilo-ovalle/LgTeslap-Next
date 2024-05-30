'use client';

import { useState, useEffect, FormEvent } from 'react';
import { SideBar } from '@/components/SideBar';
import { useAppContext } from '@/context/appContext';
import { getStatusClass } from '@/utils/getStatusClass';
import { getRandomId } from '@/utils/getRandomID';
import { Toaster, toast } from 'sonner';
import { GoAlertFill } from 'react-icons/go';
import { useRouter } from 'next/navigation';

function Dashboard() {
  const { data } = useAppContext();
  // const { testEmail, services } = data;
  const router = useRouter();

  if (!data) {
    router.push('/404');
  }

  interface Service {
    id: any;
    description: any;
    Status: any;
  }

  const [testEmail, setTestEmail] = useState('');
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    setTestEmail(data.testEmail);
    setServices(data.services);
  }, []);

  const handleCreateService = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const description = formData.get('description') as string;

    const newService = {
      id: getRandomId(1, 1000),
      description: description,
      Status: 'ACTIVE',
    };

    setServices([...services, newService]);

    toast.success('Service added successfully');
  };

  const handleUpdateService = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const id = formData.get('id') as string;
    const description = formData.get('description') as string;

    let serviceFound = false;

    const updatedServices = services.map((service) => {
      if (service.id === id) {
        serviceFound = true;
        toast.success('Service updated successfully');
        return {
          ...service,
          description,
        };
      }
      return service;
    });

    if (!serviceFound) {
      toast.warning('Service not found');
    }

    setServices(updatedServices);
  };

  const handleDeleteService = async (id: any) => {
    const updatedServices = services.filter((service) => service.id !== id);

    setServices(updatedServices);

    toast.error('Service deleted successfully');
  };

  return (
    <div className="flex bg-gray-50">
      <SideBar />
      <div className="w-full border-l border-gray-300">
        <Toaster position="top-right" richColors closeButton />
        <section className="w-full h-auto" id="Profile">
          <div className="w-full p-10">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-4">
                <p className="text-2xl text-gray-800 font-bold">{testEmail}</p>
                <p className="text-gray-600">
                  Software Engineer at Example Corp
                </p>
                <p className="text-gray-600">{testEmail}</p>
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
        <section className="w-full h-auto">
          <div className="px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
              <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 w-full ">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-full">
                    <form onSubmit={handleCreateService}>
                      <h3 className="text-lg font-medium text-gray-700">
                        Add a new service
                      </h3>
                      <div className="flex justify-center items-center">
                        <input
                          className="h-10 w-full decoration-none bg-white dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-0 "
                          placeholder="Add the description for your new service"
                          type="text"
                          name="description"
                        />
                        <button className="text-primary-50 bg-secondary-600 hover:bg-secondary-700 focus:ring-4 focus:outline-none focus:ring-secondary-400 font-medium rounded-lg text-sm px-8 py-4 text-center dark:bg-secondary-600 dark:hover:bg-secondary-700 dark:focus:ring-secondary-400">
                          ADD
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* //update service */}
              <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-full">
                    <form onSubmit={handleUpdateService}>
                      <h3 className="text-lg font-medium text-gray-700">
                        Update an existing service
                      </h3>
                      <div className="flex justify-between items-center">
                        <input
                          className="h-10 w-fit pr-5 decoration-none bg-white dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-0 "
                          placeholder="service ID"
                          type="text"
                          name="id"
                        />
                        <input
                          className="h-10 pl-5 w-full decoration-none bg-white dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-0 "
                          placeholder="Add a new description"
                          type="text"
                          name="description"
                        />
                        <button className="text-primary-50 bg-secondary-600 hover:bg-secondary-700 focus:ring-4 focus:outline-none focus:ring-secondary-400 font-medium rounded-lg text-sm px-8 py-4 text-center dark:bg-secondary-600 dark:hover:bg-secondary-700 dark:focus:ring-secondary-400">
                          ADD
                        </button>
                      </div>
                    </form>
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
                        Order ID
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
                      (user: {
                        id?: string;
                        description?: string;
                        Status?: string;
                      }) => {
                        return (
                          <tr key={user.id}>
                            <td className="pl-12 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                              {user.id}
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                              {user.description}
                            </td>
                            <td
                              className={`px-6 py-4 whitespace-no-wrap text-sm leading-5 ${getStatusClass(
                                user.Status ?? '',
                              )}`}
                            >
                              {user.Status}
                            </td>
                            <td className="pl-16 whitespace-no-wrap text-sm leading-7 text-red-500">
                              <button
                                onClick={() => handleDeleteService(user.id)}
                              >
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
