package com.cdmp.Service;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdmp.entity.Provider;
import com.cdmp.repo.ProviderRepository;

import java.util.List;

@Service
public class ProviderService {
	@Autowired
    private  ProviderRepository providerRepository;

    public List<Provider> getAllProviders() {
        return providerRepository.findAll();
    }

    public Provider getProviderById(Long id) {
        return providerRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Provider not found"));
    }

    public Provider addProvider(Provider provider) {
        return providerRepository.save(provider);
    }

    public Provider updateProvider(Long id, Provider providerDetails) {
        Provider provider = getProviderById(id);
        provider.setName(providerDetails.getName());
        provider.setSpecialization(providerDetails.getSpecialization());
        return providerRepository.save(provider);
    }

    public void deleteProvider(Long id) {
        providerRepository.deleteById(id);
    }
}