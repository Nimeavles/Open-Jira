import { ChangeEvent, useContext, useState } from "react";
import { Button, Box, TextField } from "@mui/material"
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AddIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { EntriesContext } from "../../context/entries";

export const NewEntry = () => {

    const [isAdding, setIsAdding] = useState(false);
    const [inputValue, setInputValue] = useState('')
    const [touched, setTouched] = useState(false);

    const { addNewEntry } = useContext(EntriesContext);

    const onTextFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    const onSave = () => {
        if ( inputValue.length === 0 ) return;
        addNewEntry(inputValue);
        setIsAdding( false );
        setTouched( false )
        setInputValue('')
    }

    return (
        <Box sx={{ marginBottom: 2, paddingX: 2 }} >
            {
                isAdding ? (
                    <>

                        <TextField
                            fullWidth
                            sx={{ marginTop: 2, marginBottom: 1 }}
                            placeholder='Nueva Tarea'
                            autoFocus
                            multiline
                            label='Nueva Tarea'
                            helperText={ inputValue.length <= 8 && touched && 'Ingrese un valor'  }
                            error={ inputValue.length <= 8 && touched }
                            value={ inputValue }
                            onChange={ onTextFieldChange }
                            onBlur={ () => setTouched(true) }
                        />
                        <Box display='flex' justifyContent='space-between'>
                            <Button
                                variant='outlined'
                                color='secondary'
                                endIcon={<SaveOutlinedIcon />}
                                onClick={ onSave }
                            >
                                Guardar
                            </Button>
                            <Button
                                variant='text'
                                onClick={ () => setIsAdding(false) }
                            >
                                Cancelar
                            </Button>
                        </Box>
                    </>
                ) : (
                    <Button
                        startIcon={<AddIcon />}
                        fullWidth
                        variant={'outlined'}
                        onClick={ () => setIsAdding(true) }
                    >
                        Agregar Tarea
                    </Button>
                )
            }

        </Box>
    )
}
