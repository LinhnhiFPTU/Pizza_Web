using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Text;

namespace PizzaWeb_API.Models.Handlers
{
    public class SessionHandler
    {
        private string SessionKey = "this is a very secure key";
        public string GenerateSessionId(int sessionId)
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
    }
}
