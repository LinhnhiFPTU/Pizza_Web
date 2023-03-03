using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Text;

namespace PizzaWeb_API.Handlers.Deprecated
{

    public class OldSessionHandler
    {
        private static string SessionKey = "this is a very secure key";
        //SessionID is basically the UserID stored in the database.
        public static string GenerateSessionId(int sessionId)
        {
            //Need to ask Cường xuyên tu about this security key shit.
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(SessionKey));
            var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256Signature);
            var header = new JwtHeader(credentials);

            //Data to be encrypted.
            var payload = new JwtPayload(sessionId.ToString(), null, null, null, DateTime.Today.AddDays(1));
            var securityToken = new JwtSecurityToken(header, payload);
            return new JwtSecurityTokenHandler().WriteToken(securityToken);
        }
        public static JwtSecurityToken VerifySessionId(string jwt)
        {
            //A piece of code that checks if the sent token from CLIENT
            //(given before) is similar to the one in this API (BACKEND).
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(SessionKey);
            tokenHandler.ValidateToken(jwt, new TokenValidationParameters
            {

                IssuerSigningKey = new SymmetricSecurityKey(key),
                ValidateIssuerSigningKey = true,
                ValidateIssuer = false,
                ValidateAudience = false

            }, out SecurityToken validatedToken);

            //After verification completes, return the validated token.
            return (JwtSecurityToken)validatedToken;
        }

    }
}
