package com.app.scheduler;

import java.util.Date;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class SchedulerApp {

	public static Logger logger = LoggerFactory.getLogger(SchedulerApp.class);

	@Scheduled(cron = "0/10 * * * * *")
	public void alert(){
		logger.info("{} ", new Date());
	}
}
