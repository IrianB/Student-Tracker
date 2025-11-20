import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import Footer from '../../components/Footer'
import axios from '../../axios/axios'

const Calendar = () => {
    const [selectedDate, setSelectedDate] = useState(dayjs())
    const today = dayjs()
    // const [student, setStudent] = useState(null)
    // const [isLoading, setIsLoading] = useState(true)

    // const fetchStudent = async () => {
    //     try {
    //         const id = localStorage.getItem('studentId')
    //         const response = await axios.get(`/student/${id}`)
    //         setStudent(response.data)
    //         console.log(response.data)
    //     } catch (error) {
    //         console.log('Error fetching student data:', error)
    //     }
    // }

    // useEffect(() => {
    //     fetchStudent().finally(() => setIsLoading(false))
    // }, [])

    // if (isLoading) {
    //     return <div>Loading...</div>
    // }

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className="p-6">
                

                <div className="mx-10 flex flex-col items-start">
                    <div>
                        <DateCalendar
                            value={selectedDate}
                            onChange={(newValue) => setSelectedDate(newValue)}
                            sx={{
                                bgcolor: "#FCEF91",
                                borderRadius: "12px",
                                p: 2,
                                width: "320px",
                                boxShadow: "0 4px 10px rgba(0,0,0,0.15)",

                                "& .MuiPickersDay-root": {
                                    color: "#EA2F14",
                                    fontWeight: "bold",
                                },
                                "& .Mui-selected": {
                                    backgroundColor: "#FB9E3A !important",
                                    color: "white",
                                },
                                "& .MuiPickersCalendarHeader-label": {
                                    color: "#E6521F",
                                    fontWeight: "bold",
                                },
                                "& .MuiPickersArrowSwitcher-root button": {
                                    color: "#EA2F14",
                                },
                            }}
                        />
                    </div>

                    <p className="mt-4 text-sm text-gray-700">
                        Current Date: {today.format("MMMM DD, YYYY")}
                    </p>
                </div>
            </div>

            <Footer />

        </LocalizationProvider>


    )
}

export default Calendar
