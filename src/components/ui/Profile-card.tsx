"use client";

import ProfileCard from '@/blocks/Components/ProfileCard/ProfileCard';

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/modal";

export default function ProfileCardUI() {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();


    return <>
        <ProfileCard
            name="Nicholas Yeo"
            title="Computer Science Student"
            handle="nickk_yo"
            status="Online"
            contactText="CONTACT ME"
            avatarUrl="/images/profile_card_pic.jpg"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={true}
            onContactClick={() => onOpen()} />

        <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
            <ModalContent>
                {(onClose) => (
                    <>
                    <div className="flex px-10 min-h-[40vh] justify-center items-center flex-col gap-4 max-w-3xl bg-black/80 backdrop-blur-sm rounded-xl p-6">
                        <ModalHeader className="text-3xl">Connect with me!</ModalHeader>
                        <ModalBody>
                            <p>I'm always open to discussing new opportunities and ideas. Feel free to reach out!</p>
                            <p>You can contact me via the following methods:</p>
                            <div className="mt-4 flex flex-col gap-2">
                                <span className="font-semibold">Email:</span>
                                <a href="mailto:nicyeo08@gmail.com" className="text-blue-500 hover:underline">
                                    nicyeo08@gmail.com
                                </a>
                                <span className="font-semibold">LinkedIn:</span>
                                <a href="https://www.linkedin.com/in/nicholas-yeo-88723a2bb/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                    Linkedin.com
                                </a>
                                <span className="font-semibold">GitHub:</span>
                                <a href="https://github.com/NicholasYeoYuRong" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                    Github.com/NicholasYeoYuRong
                                </a>
                                <span className="font-semibold">Instagram:</span>
                                <a href="https://www.instagram.com/nickk_yo/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                    Instagram.com/nickk_yo
                                </a>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <button
                                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-gray-600"
                                onClick={onClose}
                            >
                                Close
                            </button>
                        </ModalFooter> 
                    </div>
                    </>
                )}
            </ModalContent>
        </Modal>
    </>
}