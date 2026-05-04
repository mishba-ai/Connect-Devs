from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from backend.services.s3 import generate_upload_url
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.decorators import permission_classes,api_view

def home(request):
    return HttpResponse("Hello world ")

class presignedUploadURLView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self,request):
        print("PAYLOAD DETECTED:", request.data)
        folder = request.data.get('folder')
        filename = request.data.get('filename')
        content_type = request.data.get('content_type')
        
        if not all([folder,filename,content_type]):
            return Response({'error':'folder,filename,content_type are required'},status=status.HTTP_400_BAD_REQUEST)
        
        try:
            result = generate_upload_url(folder,filename,content_type)
            return Response(result)
        except ValueError as e :
           return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
        

        
