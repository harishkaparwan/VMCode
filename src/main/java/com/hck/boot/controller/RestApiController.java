package com.hck.boot.controller;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@RestController
@RequestMapping("/api")
public class RestApiController {
	
	public static String CREATE_POST="http://100.24.24.249/customer/account/createpost";
	public static String INDEX_POST="http://100.24.24.249/customer/account/index/";
	public static String IS_SUBS="is_subscribed";
	
	public RestTemplate restTemplate() {
	   final RestTemplate restTemplate = new RestTemplate();
	   return restTemplate;
	}
	
	public HttpEntity<String> getHttpEntity(){
          HttpHeaders headers = new HttpHeaders();
          headers.setAccessControlAllowOrigin("*");
		  List<String> allowedHeaders = new ArrayList<String> ();
		  allowedHeaders.add("X-Requested-With");
		  allowedHeaders.add("Origin");
		  allowedHeaders.add("Content-Type");
		  allowedHeaders.add("Accept");
		  headers.setAccessControlAllowHeaders(allowedHeaders);
		  Set<HttpMethod>  allowedMethods = new HashSet<HttpMethod> ();
		  allowedMethods.add(HttpMethod.GET);
		  allowedMethods.add(HttpMethod.POST);
		  headers.setAllow(allowedMethods);
		  List<HttpMethod> allowedMethods1 = new ArrayList<HttpMethod>();
		  allowedMethods1.add(HttpMethod.GET);
		  allowedMethods1.add(HttpMethod.POST);
		  headers.setAccessControlAllowMethods(allowedMethods1);
		  HttpEntity<String> entity = new HttpEntity<String>("parameters",headers );
 		return entity;
	}
	 
	@ApiOperation(value = "create a bran new account", response = List.class)
    @ApiResponses(value = {
        @ApiResponse(code = 200, message = "Successfully retrieved list"),
        @ApiResponse(code = 401, message = "You are not authorized to view the resource"),
        @ApiResponse(code = 403, message = "Accessing the resource you were trying to reach is forbidden"),
        @ApiResponse(code = 404, message = "The resource you were trying to reach is not found")
    })
 	@PostMapping("/signup")
	public ResponseEntity  createEmployees(@RequestBody Map formData) { 
	 RestTemplate restTemplate = restTemplate();
     
	 String restData="";
	 try {
		 if(null!=formData.get(IS_SUBS) && formData.get(IS_SUBS).equals("true")) {
			 formData.put(IS_SUBS, "1");
	        }else {
	        	formData.put(IS_SUBS, "0");
	        }
		 restData = mapToQueryString(formData);
	     ObjectWriter ow = new ObjectMapper().writer().withDefaultPrettyPrinter();
	     String json = ow.writeValueAsString(formData).replaceAll("\"", "'");

	     
	     UriComponentsBuilder builder = UriComponentsBuilder.fromUriString(CREATE_POST)
	             .queryParams(mapToMultiMap(formData));
	     UriComponents uriComponents = builder.build().encode();
	     ResponseEntity<String> createResponseEntity = restTemplate.exchange(uriComponents.toUri(), HttpMethod.POST, getHttpEntity(), String.class);
	     ResponseEntity<String> outputResponseEntity = restTemplate.exchange(INDEX_POST, HttpMethod.GET, getHttpEntity(), String.class);

	     /* 'CREATE_POST' return status 302 and doesn't return any JSON out indicating form is submitted.It return HTML as an output.
	      *  I am using another URL 'INDEX_POST' to see if we have 'welcome-msg'.
	      *  However I am not able to submit any data as I see enable-cookie issues.
	      *   
	      */
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
}

