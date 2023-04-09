package constsw20231.oauthg5.oauth.client;

import feign.codec.Encoder;
import feign.form.spring.SpringFormEncoder;
import org.springframework.beans.factory.ObjectFactory;
import org.springframework.boot.autoconfigure.http.HttpMessageConverters;
import org.springframework.cloud.openfeign.support.SpringEncoder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class HeaderConfiguration {
  @Bean
  public Encoder feignFormEncoder(ObjectFactory<HttpMessageConverters> messageConverters) {
    return new SpringFormEncoder(new SpringEncoder(messageConverters));
  }
}
