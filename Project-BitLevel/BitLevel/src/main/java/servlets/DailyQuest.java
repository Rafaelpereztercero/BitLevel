package servlets;

import java.io.IOException;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import services.crypto.TransactionService;

/**
 * Servlet implementation class LoginSv
 */
@WebServlet("/DailyQuest")
public class DailyQuest extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		int idVault = Integer.parseInt(request.getParameter("idVault"));

		String res = "";

		try {
			
			TransactionService t = new TransactionService();
			int claimed = t.dailyQuest(idVault);
			res = "Daily reward has been successfully redeemed";
			if (claimed == 0) {
				res = "You have already reedeemed daily today";
			}
		} catch (SQLException e) {

			e.printStackTrace();
			response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
		}
		response.addHeader("Access-Control-Allow-Origin", "*");
		response.getWriter().append(res);
	}

}