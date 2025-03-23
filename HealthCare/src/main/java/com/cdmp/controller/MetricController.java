package com.cdmp.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.cdmp.Service.MetricService;
import com.cdmp.entity.Metric;

import java.util.List;

@RestController
@RequestMapping("/metrics")
public class MetricController {
	@Autowired
    private  MetricService metricService;

    @PostMapping("/{patientId}")
    public ResponseEntity<Metric> submitMetric(@PathVariable Long patientId, @RequestBody Metric metric) {
        metric.setPatientId(patientId);
        return ResponseEntity.ok(metricService.submitMetric(metric));
    }

    @GetMapping("/{patientId}")
    public ResponseEntity<List<Metric>> getPatientMetrics(@PathVariable Long patientId) {
        return ResponseEntity.ok(metricService.getMetricsByPatient(patientId));
    }
}
