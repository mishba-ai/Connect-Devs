import boto3
from django.conf import settings
import uuid

s3_client = boto3.client(
    's3',
    region_name=settings.AWS_S3_REGION,
    aws_access_key_id=settings.AWS_S3_ACCESS_CLIENT_ID,
    aws_secret_access_key=settings.AWS_S3_SECRET_ACCESS_KEY,
)

FOLDER_MAP = {
    'accounts':  'accounts/',
    'projects':  'projects/',
}

def generate_upload_url(folder_key: str, filename: str, content_type: str, expires: int = 60) -> dict:
    
    # Returns a presigned PUT URL + the final S3 key.
    folder = FOLDER_MAP.get(folder_key)
    if not folder:
        raise ValueError(f"Unknown folder key: {folder_key}")
    
    ext = filename.rsplit('.', 1)[-1] if '.' in filename else ''
    unique_name = f"{uuid.uuid4().hex}.{ext}" if ext else uuid.uuid4().hex
    s3_key = f"{folder}{unique_name}"

    url = s3_client.generate_presigned_url(
        'put_object',
        Params={
            'Bucket': settings.AWS_S3_BUCKET,
            'Key': s3_key,
            'ContentType': content_type,
        },
        ExpiresIn=expires,
    )
    return {'upload_url': url, 's3_key': s3_key}


def upload_get_url(s3key):
    return s3_client.generate_presigned_url(
        'get_object',
        Params = {
            'Bucket':settings.AWS_S3_BUCKET,
            'Key' : s3key
        },
        ExpiresIn = 3000
        
    )