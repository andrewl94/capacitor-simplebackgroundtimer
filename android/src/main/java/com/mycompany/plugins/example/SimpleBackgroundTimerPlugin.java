package com.mycompany.plugins.example;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;


import java.util.Timer;
import java.util.TimerTask;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;


@CapacitorPlugin(name = "SimpleBackgroundTimer")
public class SimpleBackgroundTimerPlugin extends Plugin {

    private Timer timer = new Timer("Timer");
    private boolean execucoes = false;

    @PluginMethod
    public void startInterval(PluginCall call) {
        TimerTask task = new TimerTask() {
            public void run() {
                LocalDateTime currentDateTime = LocalDateTime.now();  
                DateTimeFormatter formatter = DateTimeFormatter.ISO_DATE_TIME;
                String formattedDateTime = currentDateTime.format(formatter);
                JSObject ret = new JSObject();
                ret.put("timestamp", formattedDateTime);
                notifyListeners("interval", ret);
            }
        };

        if(execucoes == false){
            Timer timer = new Timer("Timer");
            timer.schedule(task, 0 ,1000);
            execucoes = true;
        }

        JSObject ret = new JSObject();
        ret.put("value", true);
        call.resolve(ret);
    }

    @PluginMethod
    public void stopInterval(PluginCall call) {
        if(execucoes == true){
            timer.cancel();
            execucoes = false;
        }

        JSObject ret = new JSObject();
        ret.put("value", true);
        call.resolve(ret);        
    }

}
