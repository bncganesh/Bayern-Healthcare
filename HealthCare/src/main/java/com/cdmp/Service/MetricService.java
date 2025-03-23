package com.cdmp.Service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdmp.entity.Metric;
import com.cdmp.repo.MetricRepository;

import java.util.List;

@Service
public class MetricService {
	
	@Autowired
    private  MetricRepository metricRepository;

    public Metric submitMetric(Metric metric) {
        return metricRepository.save(metric);
    }

    public List<Metric> getMetricsByPatient(Long patientId) {
        return metricRepository.findByPatientId(patientId);
    }
}
