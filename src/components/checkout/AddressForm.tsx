"use client";

import { useState } from "react";
import { Search } from "lucide-react";

export default function AddressForm({ onValidation }: { onValidation: (isValid: boolean) => void }) {
  const [cep, setCep] = useState("");
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState({
    street: "",
    number: "",
    complement: "",
    neighborhood: "",
    city: "",
    state: "",
  });

  const handleCEPChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    value = value.replace(/^(\d{5})(\d)/, "$1-$2").slice(0, 9);
    setCep(value);

    // Mock ViaCEP auto-fill
    if (value.length === 9) {
      setLoading(true);
      setTimeout(() => {
        setAddress({
          ...address,
          street: "Avenida Paulista",
          neighborhood: "Bela Vista",
          city: "São Paulo",
          state: "SP",
        });
        setLoading(false);
        checkValidation({ street: "Avenida Paulista", number: address.number });
      }, 800);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddress(prev => {
      const next = { ...prev, [name]: value };
      checkValidation(next);
      return next;
    });
  };

  const checkValidation = (currentAddress: any) => {
    // Only basic validation for demo
    if (currentAddress.street && currentAddress.number) {
      onValidation(true);
    } else {
      onValidation(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-1">
          <label className="mb-1 block text-sm font-bold text-muted-foreground">CEP</label>
          <div className="relative">
            <input 
              type="text" 
              value={cep}
              onChange={handleCEPChange}
              placeholder="00000-000"
              className="h-12 w-full rounded-xl border bg-background px-4 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
            {loading && <Search className="absolute right-4 top-3.5 h-5 w-5 animate-pulse text-muted-foreground" />}
          </div>
        </div>
        <div className="md:col-span-2">
          <label className="mb-1 block text-sm font-bold text-muted-foreground">Rua / Avenida</label>
          <input 
            type="text"
            name="street"
            value={address.street}
            onChange={handleChange}
            className="h-12 w-full rounded-xl border bg-background px-4 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="col-span-1">
          <label className="mb-1 block text-sm font-bold text-muted-foreground">Número</label>
          <input 
            type="text"
            name="number"
            value={address.number}
            onChange={handleChange}
            className="h-12 w-full rounded-xl border bg-background px-4 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
        <div className="col-span-1 md:col-span-3">
          <label className="mb-1 block text-sm font-bold text-muted-foreground">Complemento (Opci.)</label>
          <input 
            type="text"
            name="complement"
            value={address.complement}
            onChange={handleChange}
            className="h-12 w-full rounded-xl border bg-background px-4 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="mb-1 block text-sm font-bold text-muted-foreground">Bairro</label>
          <input 
            type="text"
            name="neighborhood"
            value={address.neighborhood}
            onChange={handleChange}
            className="h-12 w-full rounded-xl border bg-background px-4 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-bold text-muted-foreground">Cidade</label>
          <input 
            type="text"
            name="city"
            value={address.city}
            onChange={handleChange}
            className="h-12 w-full rounded-xl border bg-background px-4 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-bold text-muted-foreground">Estado</label>
          <input 
            type="text"
            name="state"
            value={address.state}
            onChange={handleChange}
            className="h-12 w-full rounded-xl border bg-background px-4 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
      </div>
    </div>
  );
}
