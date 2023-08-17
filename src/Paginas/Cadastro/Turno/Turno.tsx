import { useForm } from "react-hook-form";

const Turno = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {};

  return (
    <div className="app-container">
      <div className="form-group">
        <label>Nome do Turno</label>
        <input
          type="text"
          placeholder="descrição do turno..."
          {...register("NomeTurno", { required: true })}
        ></input>
        {errors?.NomeTurno?.type === "required" && (
          <p className="=error message">
            A descrição do turno é de preenchimento obrigatória
          </p>
        )}
      </div>
      <div className="form-group">
        <label>Hora Inicial:</label>
        <input
          type="text"
          placeholder="horário inicial..."
          {...register("HoraInicial", { required: true })}
        ></input>
        {errors?.HoraInicial?.type === "required" && (
          <p className="=error message">
            A hora inicial do turno é de preenchimento obrigatória
          </p>
        )}
      </div>
      <div className="form-group">
        <label>Hora Final</label>
        <input
          type="text"
          placeholder="horário final..."
          {...register("HoraFinal", { required: true })}
        ></input>
        {errors?.HoraFinal?.type === "required" && (
          <p className="=error message">
            A hora final é de preenchimento obrigatória
          </p>
        )}
      </div>
      <div className="form-group">
        <label>Intervalo Inicial</label>
        <input
          type="text"
          placeholder="intervalor inicial..."
          {...register("IntervaloInicial")}
        ></input>
      </div>
      <div className="form-group">
        <label>Intervalo Final</label>
        <input
          type="text"
          placeholder="intevalor final..."
          {...register("IntervaloFinal")}
        ></input>
      </div>
      <div className="form-group">
        <label>Ocorrência do turno</label>
        <input type="checkbox" {...register("todos")} />
        <label>Todos</label>
        <input type="checkbox" {...register("dom")} />
        <label>DOM</label>
        <input type="checkbox" {...register("seg")} />
        <label>SEG</label>
        <input type="checkbox" {...register("ter")} />
        <label>TER</label>
        <input type="checkbox" {...register("qua")} />
        <label>QUA</label>
        <input type="checkbox" {...register("qui")} />
        <label>QUI</label>
        <input type="checkbox" {...register("sex")} />
        <label>SEX</label>
        <input type="checkbox" {...register("sáb")} />
        <label>SAB</label>
      </div>
      <div className="form-group">
        <button onClick={() => handleSubmit(onSubmit)()}>Criar Turno</button>
      </div>
    </div>
  );
};

export default Turno;
