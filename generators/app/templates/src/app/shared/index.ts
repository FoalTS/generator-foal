export { ConnectionService } from './connection.service';<% if (authentication) { %>
export { User } from './user.interface';
export { UserService } from './user.service';<% } %>
