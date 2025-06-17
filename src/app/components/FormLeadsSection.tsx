"use client"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { formLeadsSchema } from "@/schemas"
import { FormLeads } from "@/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

export const FormLeadsSection = () => {

  const form = useForm<FormLeads>({
    resolver: zodResolver(formLeadsSchema),
    defaultValues: {
      nombres: "",
      telefono: "",
      turno: ""
    }
  })

  function onSubmit(data: FormLeads){
    console.log(data)
  }

  return (
    <div className="space-y-8">
      <div className="relative grid grid-rows-2 min-h-[400px]">

        <div className="bg-in-cyan flex items-center justify-center"></div>
        <div className="bg-white flex items-center justify-center"></div>

        <section className="container mx-auto max-w-7xl px-4">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[1280px] min-w-[800px] h-80 rounded-lg bg-in-blue py-4 px-6 space-y-4">
            
              <h2 className="text-white text-3xl text-center">Agenda tu cita ahora</h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Nombre y apellido */}
                    <FormField
                      control={form.control}
                      name="nombres"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input className="bg-white placeholder:text-in-blue placeholder:font-medium py-4" placeholder="Nombres y apellidos" {...field} />
                          </FormControl>
                          <FormMessage className="text-white" />
                        </FormItem>
                      )}
                    />

                    {/* Teléfono */}
                    <FormField
                      control={form.control}
                      name="telefono"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input type="tel" className="bg-white placeholder:text-in-blue placeholder:font-medium py-4" placeholder="Número de teléfono" {...field} />
                          </FormControl>
                          <FormMessage className="text-white" />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Turno - Fuera del grid para que ocupe toda la fila */}
                  <FormField
                    control={form.control}
                    name="turno"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl >
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <SelectTrigger className="bg-white placeholder:text-in-blue placeholder:font-medium py-4 w-full">
                              <SelectValue placeholder="Turno" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="mañana">Mañana</SelectItem>
                              <SelectItem value="tarde">Tarde</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full cursor-pointer bg-in-orange hover:bg-in-orange text-white py-4 text-lg font-medium">
                    Agendar cita
                  </Button>
                  
                </form>
              </Form>
          </div>
        </section>
        
      </div>
    </div>
  )
}
