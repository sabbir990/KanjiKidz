import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import useAuth from '../Hooks/useAuth';
import Head_section from '../components/Head_section';
import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import toast from 'react-hot-toast';
import { TbFidgetSpinner } from 'react-icons/tb';

export default function Edit_vocabulary_modal({ isOpen, close, refetch, _id }) {
  const { user, isLoading, setIsLoading } = useAuth();
  const {data : selectedVocabulary} = useQuery({
    queryKey : ['selected_vocabulary', _id],
    queryFn : async() => {
      const {data} = await axios.get(`https://kanjikids-server.vercel.app/selected_vocabulary/${_id}`);
      return data
    }
  })

  const {mutateAsync : update_vocabulary} = useMutation({
    mutationFn : async(vocabulary) => {
      const {data} = await axios.patch(`https://kanjikids-server.vercel.app/update_vocabulary/${_id}`, vocabulary);
      return data;
    },

    onSuccess : () => {
      setIsLoading(false);
      refetch();
      close();
      toast.success("Updating vocabulary successful!")
    }
  })

  const handleSubmitEditVocabulary = async(event) => {
    event.preventDefault();

    setIsLoading(true)

    const form = event.target;
    const word = form?.word?.value;
    const pronunciation =form?.pronunciation?.value;
    const whenToSay = form?.whenToSay?.whenToSay;
    const lessonNo = form?.lessonNo?.value;
    const adminEmail = form?.adminEmail?.value;

    const updatedVocabulary = {
      word, pronunciation, whenToSay, lessonNo, adminEmail
    }

    try{
      await update_vocabulary(updatedVocabulary);
    }catch(error){
      setIsLoading(false)
      console.log(error);
      toast.error(error.message)
    }
  }

  return (
    <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none font-poppins" onClose={close}>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
          >
            <DialogTitle as="h3" className="text-base/7 font-medium text-black">
              <Head_section heading={'Edit Vocabulary'} subheading={'Modify the details of the vocabulary word, including pronunciation, usage, and lesson number.'} />
            </DialogTitle>

            <form onSubmit={handleSubmitEditVocabulary}>
              <div className="mt-4">
                <label htmlFor="word" className="block text-sm font-medium text-gray-700">
                  Word
                </label>
                <input
                  name="word"
                  type="text"
                  defaultValue={selectedVocabulary?.word}
                  className="mt-1 block px-4 py-2 w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div className="mt-4">
                <label htmlFor="pronunciation" className="block text-sm font-medium text-gray-700">
                  Pronunciation
                </label>
                <input
                  name="pronunciation"
                  type="text"
                  defaultValue={selectedVocabulary?.pronunciation}
                  className="mt-1 block px-4 py-2 w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div className="mt-4">
                <label htmlFor="whenToSay" className="block text-sm font-medium text-gray-700">
                  When to Say
                </label>
                <textarea
                  name="whenToSay"
                  rows="3"
                  defaultValue={selectedVocabulary?.whenToSay}
                  className="mt-1 block px-4 py-2 w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div className="mt-4">
                <label htmlFor="lessonNo" className="block text-sm font-medium text-gray-700">
                  Lesson No
                </label>
                <input
                  name="lessonNo"
                  type="number"
                  defaultValue={selectedVocabulary?.lessonNo}
                  className="mt-1 block px-4 py-2 w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div className="mt-4">
                <label htmlFor="adminEmail" className="block text-sm font-medium text-gray-700">
                  Admin Email
                </label>
                <input
                  name="adminEmail"
                  type="email"
                  disabled
                  className="mt-1 block px-4 py-2 w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  defaultValue={user?.email}
                />
              </div>

              <div className='flex justify-center mt-4 space-x-2'>
                <a className='btn btn-error text-white' onClick={close}>Cancel</a>
                <button disabled={isLoading} type='submit' className='btn btn-success text-white'>{isLoading ? <TbFidgetSpinner size={24} className='animate-spin' /> : "Save changes"}</button>
              </div>
            </form>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
