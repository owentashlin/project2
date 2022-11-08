//private for each code

<% projects.forEach(function(p) { %>
            <tr>
              <td><%= p.name %></td>  
              <td><%= p.type %></td>
              <td><%= p.status %></td>
              <td><a href="/projects/<%= p._id %>">Project Details</a></td>
            </tr>
            <% }); %>

            