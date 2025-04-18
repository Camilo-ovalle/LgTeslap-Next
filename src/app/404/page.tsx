'use client';

import { useState } from 'react';
import { Modal, Button } from 'flowbite-react';

function Page() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <div className="flex flex-col bg-gray-50 items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4">404 - Not Found</h1>
        <p className="text-gray-600">
          Sorry, the page you are looking for does not exist.
        </p>

        <div className="mt-4 text-center">
          <a
            href="/"
            className="text-primary-50 bg-secondary-600 hover:bg-secondary-700 focus:ring-4 focus:outline-none focus:ring-secondary-400 font-medium rounded-lg text-sm px-8 py-4 text-center dark:bg-secondary-600 dark:hover:bg-secondary-700 dark:focus:ring-secondary-400"
          >
            Go back home
          </a>
          <Modal show={openModal} onClose={() => setOpenModal(false)}>
            <Modal.Header>Terms of Service</Modal.Header>
            <Modal.Body>
              <div className="space-y-6">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  With less than a month to go before the European Union enacts
                  new consumer privacy laws for its citizens, companies around
                  the world are updating their terms of service agreements to
                  comply.
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  The European Union’s General Data Protection Regulation
                  (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
                  common set of data rights in the European Union. It requires
                  organizations to notify users as soon as possible of high-risk
                  data breaches that could personally affect them.
                </p>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button
                className="bg-secondary-400 mr-2"
                onClick={() => setOpenModal(false)}
              >
                I accept
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                Decline
              </Button>
            </Modal.Footer>
          </Modal>
          <Button
            className="bg-secondary-500 py-5 px-8 mt-10"
            onClick={() => setOpenModal(true)}
          >
            Toggle modal
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Page;
