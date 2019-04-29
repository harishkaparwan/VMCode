package com.hck.boot.controller;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@RestController
@RequestMapping("/api")
public class RestApiController {
	public static String  LOGIN="http://100.24.24.249/customer/account/login/";
	public static String CREATE_POST="http://100.24.24.249/customer/account/createpost";
	public static String INDEX_POST="http://100.24.24.249/customer/account/index/";
	public static String IS_SUBS="is_subscribed";
    RestTemplate restTemplate = new RestTemplate();
	
	public HttpHeaders getHeaders(){
        HttpHeaders headers = new HttpHeaders();
        ResponseEntity<String> requestedHeader = restTemplate.getForEntity(LOGIN, String.class);
        HttpHeaders httpHeaders = requestedHeader.getHeaders();
        headers.setAccessControlAllowOrigin("*");
        headers.add("Cookie", ""+httpHeaders.get("Set-Cookie").get(0));
        System.out.println(httpHeaders.get("Set-Cookie").get(0));
        headers.add("Accept", "application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3");
        headers.add("Accept-Encoding", "gzip, deflate");
        headers.add("Connection", "keep-alive");
        headers.add("Content-Type", "multipart/form-data");
        headers.add("Upgrade-Insecure-Requests", "1");
        headers.add("Origin", "*");
        headers.add("User-Agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36");
    return headers;
  }
	 
	@ApiOperation(value = "create a bran new account", response = List.class)
    @ApiResponses(value = {
        @ApiResponse(code = 200, message = "Successfully retrieved list"),
        @ApiResponse(code = 401, message = "You are not authorized to view the resource"),
        @ApiResponse(code = 403, message = "Accessing the resource you were trying to reach is forbidden"),
        @ApiResponse(code = 404, message = "The resource you were trying to reach is not found")
    })
	@CrossOrigin(origins = "*", methods=RequestMethod.POST, maxAge=300000, allowedHeaders="*")
 	@PostMapping("/signup")
	public ResponseEntity  createEmployees(@RequestBody Map formData) { 
	 try {
		 
		 MultiValueMap<String,String> parameters = new LinkedMultiValueMap<String,String>();
	      parameters.add("form_key", "uGK5chjsWaBZX9hy");
	       parameters.add("firstname", (String)formData.get("firstname"));
	       parameters.add("middlename", (String)formData.get("middlename"));
	       parameters.add("lastname", (String)formData.get("lastname"));
	       parameters.add("email", (String)formData.get("email"));
	       parameters.add("password", (String)formData.get("password"));
	       parameters.add("confirmation", (String)formData.get("confirm"));
	       parameters.add("success_url", "");
	       parameters.add("error_url", "");
	       parameters.add("is_subscribed", "1");
	       if(null!=formData.get(IS_SUBS) && formData.get(IS_SUBS).equals("true")) {
				 parameters.add("is_subscribed", "1");
		        }else {
		        	 parameters.add("is_subscribed", "0");
		        }
	    HttpEntity<MultiValueMap<String,String>> entity =
	                 new HttpEntity<MultiValueMap<String, String>>(parameters, getHeaders());  
	    
	    /* We can avoid all rest call and use below standalone method for posting data
	          // httpPostMethod(CREATE_POST,formdata);
	     */
	    
	    
	   
	    /* 'CREATE_POST' return status 302 and doesn't return any JSON out indicating form is submitted.It return HTML as an output.
	      *  I am using another URL 'INDEX_POST' to see if we have 'welcome-msg'.
	      *  However I am not able to submit any data as I see enable-cookie issues.
	      *   
	      */
	     ResponseEntity<String> createResponseEntity = restTemplate.exchange(CREATE_POST, HttpMethod.POST, entity, String.class);
	     ResponseEntity<String> outputResponseEntity = restTemplate.exchange(INDEX_POST, HttpMethod.GET, entity, String.class);
	    
	     if(outputResponseEntity!=null && outputResponseEntity.getBody()!=null ) {
				String message=outputResponseEntity.getBody().substring(outputResponseEntity.getBody().indexOf("welcome-msg"), outputResponseEntity.getBody().indexOf("welcome-msg")+50);
				System.out.println(message);
				 return new ResponseEntity(formData, HttpStatus.OK);

			}
	} catch (Exception e) {
		// TODO: handle exception
		e.printStackTrace();
		 return new ResponseEntity(formData, HttpStatus.BAD_REQUEST);

	}
	return null;
	
	}
	public String mapToQueryString(Map<String, String> map) {
	    StringBuilder string = new StringBuilder();
 
	    for(Entry<String, String> entry : map.entrySet()) {
	        string.append(entry.getKey());
	        string.append("=");
	        string.append(entry.getValue());
	        string.append("&");
	    }
	    return string.substring(0, string.length()-1).toString();
	}
	
	public String formdata(Map<String, String> map) {
	    StringBuilder string = new StringBuilder();
 
	    for(Entry<String, String> entry : map.entrySet()) {
	        string.append(entry.getKey());
	        string.append("=");
	        string.append(entry.getValue());
	        string.append("");
	    }
	    return string.substring(0, string.length()-1).toString();
	}
	public LinkedMultiValueMap<String, String> mapToMultiMap(Map<String, String> map) {
		LinkedMultiValueMap<String, String> linkedMap=new LinkedMultiValueMap<String, String>();
		Set set=map.entrySet();
		Iterator itr=set.iterator();
		while(itr.hasNext()) {
			Map.Entry<String, String> me= (Map.Entry<String, String> ) itr.next();
			linkedMap.add(me.getKey(), me.getValue());
		}
	    return linkedMap;
	}

	private void httpPostMethod(String url, String urlParameters) {
		try {
			URL obj = new URL(url);
			HttpURLConnection con = (HttpURLConnection) obj.openConnection();
			con.setRequestMethod("POST");
			con.addRequestProperty("Cookie",
					"frontend=9297b78d68658ba4000eb74618d67676; expires=Sat, 30-Apr-2019 14:42:16 GMT; Max-Age=3600; path=/; domain=100.24.24.249; httponly");
			con.setRequestProperty("User-Agent",
					"Mozilla/5.0 (Windows NT 6.1; WOW64; rv:13.0) Gecko/20100101 Firefox/13.0.1");
			con.setRequestProperty("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8");
			con.setRequestProperty("Content-Type",
					"application/xhtml+xml;application/xml;application/x-www-form-urlencoded; text/html; charset=UTF-8");
			con.setRequestProperty("Accept-Language", "pl,en-us;q=0.7,en;q=0.3");
			con.setRequestProperty("Accept-Encoding", "gzip, deflate");
			con.setRequestProperty("Connection", "keep-alive");
			con.setRequestProperty("Cookie",
					"frontend=9297b78d68658ba4000eb74618d67676; expires=Sat, 30-Apr-2019 14:42:16 GMT; Max-Age=3600; path=/; domain=100.24.24.249; httponly");
			// Send post request
			con.setDoOutput(true);
			DataOutputStream wr = new DataOutputStream(con.getOutputStream());
			wr.writeBytes(urlParameters);
			wr.flush();
			wr.close();
			int responseCode = con.getResponseCode();
			System.out.println(con.getHeaderFields());
			BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
			String inputLine;
			StringBuffer response = new StringBuffer();

			while ((inputLine = in.readLine()) != null) {
				response.append(inputLine);
			}
			in.close();
			System.out.println(response.toString());

		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}

		// print result
	}
}

