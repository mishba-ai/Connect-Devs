from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.exceptions import  AuthenticationFailed

class CookieJWTAuthentication(JWTAuthentication):
    """
    Extends the default JWT authentication to read tokens from cookies
    """
    
    def authenticate(self, request):
        # get token form cookie
        raw_token = request.COOKIES.get('access_token')
        # if no cookie
        if raw_token is None:
            return None
        
        #validate the token
        try:
            validated_token = self.get_validated_token(raw_token)
            user = self.get_user(validated_token)
            return (user,validated_token)
        except:
            raise AuthenticationFailed('Invalid or expired token')