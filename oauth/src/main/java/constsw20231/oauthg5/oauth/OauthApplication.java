package constsw20231.oauthg5.oauth;

import feign.codec.ErrorDecoder;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.cloud.openfeign.FeignErrorDecoderFactory;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
@EnableFeignClients
public class OauthApplication {

	public static void main(String[] args) {
		SpringApplication.run(OauthApplication.class, args);
	}

}
