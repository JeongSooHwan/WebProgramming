<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page import="java.io.*, java.util.Date, java.io.File"%>

<%!
	String y;
	String b_t;
	String b_c;
	String a_t;
	String a_c;
%>

<%	
	int line_count = 0;
	char c;
	String temp = "";
	y = request.getParameter("yoil");
	b_t = request.getParameter("before_title");
	b_c = request.getParameter("before_contents");
	a_t = request.getParameter("after_title");
	a_c = request.getParameter("after_contents");
	
	String a = a_t+"-"+a_c+"/";
	String b = b_t+"-"+b_c+"/";
	
	
	String name = "/jsp/";
	name = pageContext.getServletContext().getRealPath(name);
	PrintWriter writer = null;
	
 	switch(y){
 	case "mondl":
 		File newFile = new File(name, "Monday.txt");
 		FileReader fr = new FileReader(newFile);
 		BufferedReader br = new BufferedReader(fr);
 		String readData, dummy;
 		while((readData = br.readLine()) != null){
 			dummy = " " + readData;
 			if(readData.equals(b)||dummy.equals(b)){
 				readData = a;
 			}
 			
 			temp += readData;
 			System.out.println("--------------------------");
 			System.out.println(temp);
 		}
 		br.close();
 		fr.close();
 		
		String dir = application.getRealPath("/jsp/");
		String filePath = dir + "/" + "Monday.txt";
		writer = new PrintWriter(filePath);
		for (int i = 0; i < temp.length(); i++) {
			c = temp.charAt(i);
			if (c == '/')
				writer.printf("%c\r\n", c);
			else
				writer.printf("%c", c);
		}
			writer.close();
 		break;
 		
	case "tuedl":
 		File newFile2 = new File(name, "Tuesday.txt");
 		
 		FileReader fr2 = new FileReader(newFile2);
 		BufferedReader br2 = new BufferedReader(fr2);
 		String readData2, dummy2;
 		while((readData2 = br2.readLine()) != null){
 			dummy2 = " " + readData2;
 			if(readData2.equals(b)||dummy2.equals(b)){
 				readData2 = a;
 			}
 			
 			temp += readData2;
 		}
 		br2.close();
 		fr2.close();
 		
		String dir2 = application.getRealPath("/jsp/");
		String filePath2 = dir2 + "/" + "Tuesday.txt";
		writer = new PrintWriter(filePath2);
		for (int i = 0; i < temp.length(); i++) {
			c = temp.charAt(i);
			if (c == '/')
				writer.printf("%c\r\n", c);
			else
				writer.printf("%c", c);
		}
			writer.close();
 		break;
 		
	case "weddl":
 		File newFile3 = new File(name, "Wednesday.txt");
 		
 		FileReader fr3 = new FileReader(newFile3);
 		BufferedReader br3 = new BufferedReader(fr3);
 		String readData3, dummy3;
 		while((readData3 = br3.readLine()) != null){
 			dummy3 = " " + readData3;
 			if(readData3.equals(b)||dummy3.equals(b)){
 				readData3 = a;
 			}
 			
 			temp += readData3;
 		}
 		br3.close();
 		fr3.close();
 		
		String dir3 = application.getRealPath("/jsp/");
		String filePath3 = dir3 + "/" + "Wednesday.txt";
		writer = new PrintWriter(filePath3);
		for (int i = 0; i < temp.length(); i++) {
			c = temp.charAt(i);
			if (c == '/')
				writer.printf("%c\r\n", c);
			else
				writer.printf("%c", c);
		}
			writer.close();
 		break;
 		
	case "thudl":
 		File newFile4 = new File(name, "Thursday.txt");
 		
 		FileReader fr4 = new FileReader(newFile4);
 		BufferedReader br4 = new BufferedReader(fr4);
 		String readData4, dummy4;
 		while((readData4 = br4.readLine()) != null){
 			dummy4 = " " + readData4;
 			if(readData4.equals(b)||dummy4.equals(b)){
 				readData4 = a;
 			}
 			
 			temp += readData4;
 		}
 		br4.close();
 		fr4.close();
 		
		String dir4 = application.getRealPath("/jsp/");
		String filePath4 = dir4 + "/" + "Thursday.txt";
		writer = new PrintWriter(filePath4);
		for (int i = 0; i < temp.length(); i++) {
			c = temp.charAt(i);
			if (c == '/')
				writer.printf("%c\r\n", c);
			else
				writer.printf("%c", c);
		}
			writer.close();
 		break;
 		
	case "fridl":
 		File newFile5 = new File(name, "Friday.txt");
 		
 		FileReader fr5 = new FileReader(newFile5);
 		BufferedReader br5 = new BufferedReader(fr5);
 		String readData5, dummy5;
 		while((readData5 = br5.readLine()) != null){
 			dummy5 = " " + readData5;
 			if(readData5.equals(b)||dummy5.equals(b)){
 				readData5 = a;
 			}
 			
 			temp += readData5;
 		}
 		br5.close();
 		fr5.close();
 		
		String dir5 = application.getRealPath("/jsp/");
		String filePath5 = dir5 + "/" + "Friday.txt";
		writer = new PrintWriter(filePath5);
		for (int i = 0; i < temp.length(); i++) {
			c = temp.charAt(i);
			if (c == '/')
				writer.printf("%c\r\n", c);
			else
				writer.printf("%c", c);
		}
			writer.close();
 		break;
 	}
	
%>