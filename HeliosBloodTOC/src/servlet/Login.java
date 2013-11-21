package servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/Login")
public class Login extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public Login() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		PrintWriter out = response.getWriter();
		String vuser = request.getParameter("user");
		String vpass = request.getParameter("pass");
		if(vuser == null || vpass == null){
			out.println("<br>Pls. fill-out the form...");
			return;
		}
		if(vuser.equals("Paolo") && vpass.equals("Mayo") || vuser.equals("Aldrin") && vpass.equals("Esteban") ){
			out.println("<br>Login is corret");
			
			RequestDispatcher rd = request.getRequestDispatcher("ChapterSelect.html");	
			rd.forward(request, response);
			
			return;
		}else{
			
			out.println("<br>Login is incorrect");
	
			
			
		}
		
		}
		
		
		

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
