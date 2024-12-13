import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'
import Head_section from '../components/Head_section'
import toast from 'react-hot-toast';
import useAuth from '../Hooks/useAuth';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { TbFidgetSpinner } from 'react-icons/tb';

export default function Delete_lesson_modal({ isOpen, close, refetch, _id }) {
    const { isLoading, setIsLoading } = useAuth();

    const { mutateAsync: delete_lesson } = useMutation({
        mutationFn: async () => {
            const { data } = await axios.delete(`https://kanjikids-server.vercel.app/delete_lesson/${_id}`);
            return data;
        },

        onSuccess: () => {
            setIsLoading(false);
            refetch();
            close();
            toast.success("Lesson Deleted!")
        }
    })
    const handleDeleteLesson = async () => {
        setIsLoading(true)
        try {
            await delete_lesson()
        } catch (error) {
            setIsLoading(false)
            console.log(error);
            toast.error(error.message)
        }
    }
    return (
        <>
            <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none font-poppins" onClose={close} __demoMode>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <DialogPanel
                            transition
                            className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
                        >
                            <DialogTitle as="h3" className="text-black font-medium">
                                <Head_section heading={'Confirm Deletion of Lesson'} subheading={'Are you sure you want to delete this lesson? This action cannot be undone.'} />
                            </DialogTitle>
                            <div className="mt-4 flex justify-center space-x-2">
                                <button className='btn btn-success text-white' onClick={close}>Cancel</button>
                                <Button
                                    disabled={isLoading}
                                    className="btn btn-error text-white"
                                    onClick={() => handleDeleteLesson()}
                                >
                                    {isLoading ? <TbFidgetSpinner size={24} className='animate-spin' /> : "Delete!"}
                                </Button>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    )
}
