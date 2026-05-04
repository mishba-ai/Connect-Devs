import api from "../api/axiosInstance.ts";

export async function uploadToS3(folder: string, file: File): Promise<string> {
    const res = await api.post('/api/upload/presignedurl/', {
        folder,
        filename: file.name,
        content_type: file.type
    })

    const { upload_url, s3_key } = await res.data
    if (!upload_url) {
        throw new Error("Django did not return a valid 'upload_url'.");
    }
    await fetch(upload_url, {
        method: 'PUT',
        headers: { 'Content-Type': file.type },
        body: file
    })
    return s3_key
}