package servlet;

import java.io.IOException;


import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class TOC
 */
@WebServlet("/TOC")
public class TOC extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public TOC() {
        super();
    }

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		String Chap = request.getParameter("box");
		
		
		if (Chap.equals("C1")){
			RequestDispatcher rd = request.getRequestDispatcher("Chapter1.html");	
			rd.forward(request, response);
		}
		else if (Chap.equals("C1S1")){
			RequestDispatcher rd = request.getRequestDispatcher("Chapter1Scene1.html");	
			rd.forward(request, response);
		}
		else if (Chap.equals("C1S2")){
			RequestDispatcher rd = request.getRequestDispatcher("Chapter1Scene2.html");	
			rd.forward(request, response);
		}
		else if (Chap.equals("C1S3")){
			RequestDispatcher rd = request.getRequestDispatcher("Chapter1Scene3.html");	
			rd.forward(request, response);
		}
		else if (Chap.equals("C1S4")){
			RequestDispatcher rd = request.getRequestDispatcher("Chapter1Scene4.html");	
			rd.forward(request, response);
		}
		else if (Chap.equals("C1S5")){
			RequestDispatcher rd = request.getRequestDispatcher("Chapter1Scene5.html");	
			rd.forward(request, response);
		}
		else if (Chap.equals("C1S6")){
			RequestDispatcher rd = request.getRequestDispatcher("Chapter1Scene6.html");	
			rd.forward(request, response);
		}
		else if (Chap.equals("C1S7")){
			RequestDispatcher rd = request.getRequestDispatcher("Chapter1Scene7.html");	
			rd.forward(request, response);
		}
		else if (Chap.equals("C1S8")){
			RequestDispatcher rd = request.getRequestDispatcher("Chapter1Scene8.html");	
			rd.forward(request, response);
		}
		else if (Chap.equals("C1S9")){
			RequestDispatcher rd = request.getRequestDispatcher("Chapter1Scene9.html");	
			rd.forward(request, response);
		}
		else if (Chap.equals("C1S10")){
			RequestDispatcher rd = request.getRequestDispatcher("Chapter1Scene10.html");	
			rd.forward(request, response);
		}
		else if (Chap.equals("C1S11")){
			RequestDispatcher rd = request.getRequestDispatcher("Chapter1Scene11.html");	
			rd.forward(request, response);
		}
		else if (Chap.equals("C2")){
			RequestDispatcher rd = request.getRequestDispatcher("Chapter2.html");	
			rd.forward(request, response);
		}
		else if (Chap.equals("C2S1")){
			RequestDispatcher rd = request.getRequestDispatcher("Chapter2Scene1.html");	
			rd.forward(request, response);
		}
		else if (Chap.equals("C2S2")){
			RequestDispatcher rd = request.getRequestDispatcher("Chapter2Scene2.html");	
			rd.forward(request, response);
		}
		else if (Chap.equals("C2S3")){
			RequestDispatcher rd = request.getRequestDispatcher("Chapter2Scene3.html");	
			rd.forward(request, response);
		}
		else if (Chap.equals("C2S4")){
			RequestDispatcher rd = request.getRequestDispatcher("Chapter2Scene4.html");	
			rd.forward(request, response);
		}

	}


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
