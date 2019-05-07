<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page import="java.io.*, java.util.Date"%>

<%!
	String d;
	String t;
	String c;
%>

<%
	d = request.getParameter("day");
	t = request.getParameter("title");
	c = request.getParameter("contents");

	String filename = d + ".txt";
	String temp = "";

	PrintWriter writer = null;

	/*파일 읽기*/
	String name = "/jsp/";
	name = pageContext.getServletContext().getRealPath(name);
	File newFile = new File(name, filename);
	
	if (newFile.exists()) {
		FileReader fr = new FileReader(newFile);
		BufferedReader br = new BufferedReader(fr);
		String readData = br.readLine();

		while (readData != null) {
			temp += readData;
			readData = br.readLine();

		}
		
		br.close();
		fr.close();
	}
		temp = temp + t + "-" + c + "/";
		String dir = application.getRealPath("/jsp/");
		String filePath = dir + "/" + filename;
		writer = new PrintWriter(filePath);
		for (int i = 0; i < temp.length(); i++) {
			char c = temp.charAt(i);
			if (c == '/')
				writer.printf("%c\r\n", c);
			else
				writer.printf("%c", c);
		}

		writer.close();
%>