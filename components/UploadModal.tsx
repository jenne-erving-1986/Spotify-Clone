"use client"

import Modal from "./Modal";

import useUploadModal from "@/hooks/useUploadModal";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";



const UploadModal = () => {
    const uploadModal = useUploadModal();

    const {
        register,
        handleSubmit,
        reset
    } = useForm<FieldValues>({
       author: "",
       title: "",
       song: null,
       image: null,
    })


    const onChange = (open: boolean) => {
        if (!open) {
            reset();
            uploadModal.onClose();
        }
    }

    const onSubmi: SubmitHandler<FieldValues> = async (values) => {
        //upload to supabase
    }

    return (
        <Modal
        title="Add a song"
        description="Upload an mp3 file"
        isOpen={uploadModal.isOpen}
        onChange={onChange}
        >
            <form
            onSubmit={handleSubmit(onSubmit)}
            >

            </form>
        </Modal>
    );
}

export default UploadModal;