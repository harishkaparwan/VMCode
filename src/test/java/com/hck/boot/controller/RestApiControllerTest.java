package com.hck.boot.controller;

import static org.mockito.Mockito.mock;

import java.util.Map;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.hck.boot.main.SpringBootStartupApplication;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT,classes = SpringBootStartupApplication.class)
public class RestApiControllerTest {
	
	@Autowired
    private ObjectMapper objectMapper;
	
	private static final String HashMap = null;
 
	 final String BASE_URL = "http://localhost:8085/";

     @Autowired
     private RestApiController restApiController;

     private MockMvc mockMvc;
     
     RestTemplate mockRestTemplate = Mockito.mock(RestTemplate.class);
     ResponseEntity mockResponseEntity = Mockito.mock(ResponseEntity.class);

     
     @Before
     public void setup() {
         this.mockMvc = MockMvcBuilders.standaloneSetup(restApiController).build();
     }
     @Test
     public void testSayHelloWorld() throws Exception{
         //Mocking Controller
    	 restApiController = mock(RestApiController.class);

          
     }

	public RestTemplate testrestTemplate() {
	   final RestTemplate restTemplate = new RestTemplate();
	   return restTemplate;
	}
	
	public HttpEntity<String> testgetHttpEntity(){
		HttpEntity HttpEntity = Mockito.mock(HttpEntity.class);
		return HttpEntity;
	}
 
 	@PostMapping("/employees")
	public ResponseEntity  createEmployees(@RequestBody Map customer) { 
 		String url="http://100.24.24.249/customer/account/createpost?firstname=H1&middlename=a1&lastname=kap1&email=harish.kaparwang12345@gmail.com&password=harish123&confirmation=harish123&is_subscribed=1";
	    Mockito.when(mockRestTemplate.exchange(url, HttpMethod.POST, testgetHttpEntity(), String.class)).thenReturn(mockResponseEntity);
	 return mockResponseEntity;
     
	}
}

